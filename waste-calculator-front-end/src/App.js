import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import _get from 'lodash/get';
import NavigationBar from './components/NavigationBar';
import ProgressBar from './components/ProgressBar';
import { getStep, steps } from './steps';
import { connect } from 'react-redux';
import { resetForm, submitForm } from './actions/formActions';
import ShareResults from './components/ShareResults';

class App extends Component {
    constructor({ history }) {
        super();

        // Check which you are. In case that you are not on the correct path,
        // It must redirect to the root of the page
        const currentStep = getStep('path', history.location.pathname);

        this.state = {
            currentStep: currentStep.stepOrder
        };
    }

    componentDidMount() {
        // Check if the form is submited
    }

    handleNext = () => {
        const { currentStep } = this.state;
        const { submitForm, form } = this.props;
        const nextStep = getStep('stepOrder', currentStep + 1);

        if (nextStep.stepOrder !== 8) {
            this.setState({ currentStep: nextStep.stepOrder });
        }
        else {
            submitForm(form);
        }
    };

    handleBack = () => {
        const { currentStep } = this.state;
        const { history } = this.props;

        this.setState({ currentStep: currentStep - 1 });
        history.goBack();
    };

    handleOnStartAgain = () => {
        const { resetForm, history } = this.props;
        resetForm();
        history.push('/');

        this.setState({ currentStep: 0 });
    };

    handleOnShare = () => {
        console.log('On share');
    };

    render() {
        const { currentStep } = this.state;
        const { history, isSubmitted, isFetching } = this.props;
        const nextStep = getStep('stepOrder', currentStep + 1);
        const nextStepPath = _get(nextStep, 'path', '/step-results');

        const currentKey = history.location.pathname.split('/')[1] || '/';

        const formContainerClass =
            `waste-calculator__form-container ${ isSubmitted ? 'waste-calculator__form-container--full-width' : '' }`;

        const timeout = {
            enter: 300,
            exit: 200
        };

        return (
            <div className="waste-calculator__container">
                <ProgressBar history={ history }/>
                <div className={ formContainerClass }>
                    <Switch location={ history.location }>
                        { steps.map((step, index) => (
                            <Route component={ step.component }
                                   key={ index }
                                   exact
                                   path={ step.path }/>
                        )) }
                    </Switch>
                    { isFetching && <p>Submitting...</p> }
                    <NavigationBar onBack={ this.handleBack }
                                   onNext={ this.handleNext }
                                   onShare={ this.handleOnShare }
                                   onStartAgain={ this.handleOnStartAgain }
                                   completed={ isSubmitted }
                                   nextStep={ nextStepPath }/>
                </div>
                <ShareResults/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    form: state.form.form,
    isFetching: state.form.isFetching,
    isSubmitted: state.form.isSubmitted
});

App.propTypes = {
    history: PropTypes.object,
    submitForm: PropTypes.func,
    resetForm: PropTypes.func,
    form: PropTypes.object,
    isFetching: PropTypes.bool,
    isSubmitted: PropTypes.bool
};

export default withRouter(connect(mapStateToProps, {
    submitForm,
    resetForm
})(App));

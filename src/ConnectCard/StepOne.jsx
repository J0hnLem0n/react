import React from "react";

var StepOne = React.createClass({
    getInitialState: function() {
        return {
            agreeNotChecked: true,
            onePartIsEmpty: true,
            twoPartIsEmpty: true,
            threePartIsEmpty:true,
            fourPartIsEmpty:true,
            monthIsEmpty:true,
            yearIsEmpty:true
        };
    },
    componentDidMount: function() {
        // ReactDOM.findDOMNode(this.refs.author).focus();
    },
    onBtnClickHandler: function(e) {

    },
    onCheckRuleClick: function(e) {
        this.setState({
            agreeNotChecked: !this.state.agreeNotChecked
        });
    },
    onFieldChange: function(fieldName, e) {
        if (e.target.value.trim().length > 0) {
            this.setState({
                ['' + fieldName]: false
            })
        } else {
            this.setState({
                ['' + fieldName]: true
            })
        }
    },
    render: function() {
        var agreeNotChecked = this.state.agreeNotChecked,
            onePartIsEmpty = this.state.onePartIsEmpty,
            twoPartIsEmpty = this.state.twoPartIsEmpty,
            threePartIsEmpty = this.state.threePartIsEmpty,
            fourPartIsEmpty = this.state.fourPartIsEmpty,
            monthIsEmpty = this.state.monthIsEmpty,
            yearIsEmpty = this.state.yearIsEmpty;
            function checkEnableBtn() {
                return (
                    agreeNotChecked
                    || onePartIsEmpty
                    || twoPartIsEmpty
                    || threePartIsEmpty
                    || fourPartIsEmpty
                    || monthIsEmpty
                    || yearIsEmpty )
        }
        return (
            <form className=''>
                <input type='text' className='' onChange={this.onFieldChange.bind(this, 'onePartIsEmpty')}/>
                <input type='text' className='' onChange={this.onFieldChange.bind(this, 'twoPartIsEmpty')}/>
                <input type='text' className='' onChange={this.onFieldChange.bind(this, 'threePartIsEmpty')}/>
                <input type='text' className='' onChange={this.onFieldChange.bind(this, 'fourPartIsEmpty')}/>
                <br/>
                <input type='text' className='' onChange={this.onFieldChange.bind(this, 'monthIsEmpty')}/>
                <input type='text' className='' onChange={this.onFieldChange.bind(this, 'yearIsEmpty')}/>
                <br/>
                {/* <input type='text' className='add__author' onChange={this.onFieldChange.bind(this, 'authorIsEmpty')} placeholder='Ваше имя' ref='author'/>
                <textarea className='add__text' onChange={this.onFieldChange.bind(this, 'textIsEmpty')} placeholder='Текст новости' ref='text'></textarea> */}
                <label className='add__checkrule'>
                    <input type='checkbox' ref='checkrule' onChange={this.onCheckRuleClick}/>Я согласен с правилами
                </label>
                <br/>
                <button className='add__btn' onClick={this.onBtnClickHandler} ref='alert_button' disabled={checkEnableBtn()}>
                    ОК
                </button>
            </form>
        );
    }
});
module.exports = StepOne

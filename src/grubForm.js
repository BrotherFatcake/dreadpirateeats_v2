import React from 'react';

import './grubForm.css';

    export default class GrubForm extends React.Component {

        constructor(props) {
            super(props);
            
            this.state ={
                numPulls: 1,
                gameOn: true,
                reset: false
            }
        }
        

        onSubmit(event) {
            
            event.preventDefault();
            
            let pulls = this.state.numPulls;

            this.setState({
                numPulls: this.state.numPulls+1
            })

            
            if(pulls > 2) {
                this.setState({
                    gameOn: false,
                    reset: true                
                })
            }
            console.log('pulls: ', pulls)

            this.props.selectGrub(pulls)
        }

        resetApp(event) {

            event.preventDefault();

            this.setState({
                numPulls: 1,
                gameOn: true,
                reset: false
            })
            
            this.props.selectGrub(this.state.gameOn)
        }

        render() {

            if(this.state.gameOn) {
                return(
                    <div className='grubForm'>
                        <form onSubmit={event => this.onSubmit(event)}>
                            <button type='submit' name='submit' id='selectGrubButton' className='selectGrubButton'>Where shall ye eat?!?</button>
                        </form>
                    </div>
                )
            }

            if(this.state.reset) {
                return(
                    <div className='grubForm'>
                        <form onSubmit={event => this.resetApp(event)}>
                            <button type='submit' name='reset' id='resetAppButton' className='resetAppButton'>Reset App</button>
                        </form>
                    </div>
                )
            }
            
        }


    }
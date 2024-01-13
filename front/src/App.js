import React from 'react';
import axios from 'axios';
import steam from './images/steam-icon.png';
import chicken from './images/chicken-icon.png';

class App extends React.Component {
    state = { details: [], error: null }

    componentDidMount() {
        axios.get('')
            .then(res => {
                console.log('API Response:', res.data);
                this.setState({
                    details: res.data.users
                });
            })
            .catch(err => {
                console.error('Error fetching data:', err);
                this.setState({
                    error: 'Error fetching data. Please try again later.'
                });
            });
    }


    render() {
        console.log('State:', this.state); 
        const { details, error } = this.state;

        return (
            <div>
                <header>
                    <div class="title">
                        <a href='http://localhost:3000/'><div class="logo"><img src={chicken} alt="" class="chicken-icon"/><span>CYBER KG</span></div></a>
                    </div>
                    <div class="registr">
                        <a href=""><div class="reg"><img src={steam} alt="" class="steam-icon"/>Войти через Steam</div></a>
                    </div>
                </header>

            </div>   
        )
    }
}

export default App;
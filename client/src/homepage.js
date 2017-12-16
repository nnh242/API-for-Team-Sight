import React from 'react';
import './homepage.css';
import Banner from './banner.png';
import RegistrationForm from './registration';  

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div className="home-page">
                    <a href="/login" class="login-link">Login</a>
                    <section>
                    <img src={Banner} alt="Team Sight" className="banner"/>
                        <header>
                            <h3>Manage your team members</h3>
                        </header>
                        <p>[<em>placeholder for team's team</em>]</p>
                        <p>TeamSight helps you become aware of what your team members are working on, compare the estimated and actual duration of their tasks. You can use this app to manage tasks and members, and use simple metrics to predict project's duration. </p>
                    </section>
                    <section>
                        <header>
                            <h3>Assign tasks and members</h3>
                        </header>
                        <p>[<em>placeholder for screenshot of taskteams</em>]</p>
                        <p>The key to manage a good project is to define roles and related tasks with smart goals. A constant struggle for a project manager is to gather the current tasks that members are working on and how long they take to complete the tasks.TeamSight provides you with a quick and simple interface that helps you keep track of what your members are working on and how long it takes them to finish.</p>
                    </section>
                    <section>
                        <header>
                            <h3>Keep track of your progress</h3>
                        </header>
                        <p>[<em>placeholder for screenshot of metrics</em>]</p>
                        <p>Compare the estimated time and actual time of completion for each task for each team member. This simple metric is powerful to see the team member's patterns and plan for optimization.</p>
                    </section>
                <section>
                 <RegistrationForm />
                 </section>
                 </div>
                <footer>©2017 Made by Tina Hoang - Logo and Banner Made By LogoJoy</footer>
            </div>
        );
    }
}

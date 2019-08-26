import React, { Component } from 'react';
import Profile from './components/pages/Profile';
import { Consumer } from './context';

class ProfileContainer extends React.Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { user } = value;
                    return (
                        <div className="row">
                            {user.map(profileContent => (
                                <Profile profileContent={profileContent} />
                            ))}
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default ProfileContainer;
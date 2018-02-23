import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

class Navbar extends React.Component {
    
    constructor (props) {
        super(props);
        console.log(this.props.navProps.nameHandler);
    }

    componentDidMount() {
        var buttons = Array.from($("li button"));
        buttons.forEach(function (elem) {
           elem.style.width = 'auto';
           elem.style.margin = '10px';
        });
    }

    render() {
        return (
            <div>
                <div className="navbar-fixed">
                    <nav className="black">
                        <div className="nav-wrapper">
                            <a href="#" className="brand-logo"><img id="nav_logo" src="/assets/travlr_logo_white.png"/></a>
                            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                                className="material-icons">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                                <li><a href="#"><i className="material-icons left">settings</i></a></li>
                                <li>
                                    {!this.props.navProps.nameHandler

                                        ?
                                        <GoogleLogin
                                            clientId="110941707391-lin5grtvjtedoudnpe5p37tnbq7f3qkd.apps.googleusercontent.com"
                                            buttonText="Sign-in with Google"
                                            onSuccess={this.props.navProps.login}
                                            onFailure={this.props.navProps.login}
                                        />
                                        :
                                        <GoogleLogout
                                            buttonText={"Logout of " + this.props.navProps.nameHandler}
                                            onLogoutSuccess={this.props.navProps.logout}
                                        />
                                    }
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div>
                    <ul className="sidenav" id="mobile-demo">
                        <li><a href="#"><i className="material-icons left">settings</i>Settings</a></li>
                        <li>
                            {!this.props.navProps.nameHandler

                                ?
                                <GoogleLogin
                                    clientId="110941707391-lin5grtvjtedoudnpe5p37tnbq7f3qkd.apps.googleusercontent.com"
                                    buttonText="Sign-in with Google"
                                    onSuccess={this.props.navProps.login}
                                    onFailure={this.props.navProps.login}
                                />
                                :
                                <GoogleLogout
                                    buttonText={"Logout of " + this.props.navProps.nameHandler}
                                    onLogoutSuccess={this.props.navProps.logout}
                                />
                            }
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
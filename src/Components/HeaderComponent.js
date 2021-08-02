import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Jumbotron, Nav, Navbar, NavbarBrand, Button, NavbarToggler, Collapse, NavItem, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username is:" + this.username.value + "Password is:" + this.password.value + "Remember me:" + this.remember.checked);
        event.preventDefault();
    }

    render() {
        return ( <
            React.Fragment >
            <
            Navbar dark expand = "md" >
            <
            div className = "container" >
            <
            NavbarToggler onClick = { this.toggleNav }
            /> <
            NavbarBrand className = "mr-auto"
            href = "/" >
            <
            img src = "assets/images/logo.png"
            height = "30"
            width = "41"
            alt = "Extra Blatt Resturant!!" / >
            <
            /NavbarBrand> <
            Collapse isOpen = { this.state.isNavOpen }
            navbar >
            <
            Nav navbar >
            <
            NavItem >
            <
            NavLink className = "nav-link"
            to = "/home" >
            <
            span className = "fa fa-home fa-lg" > < /span>HOME <
            /NavLink> <
            /NavItem> <
            NavItem >
            <
            NavLink className = "nav-link"
            to = "/aboutus" >
            <
            span className = "fa fa-info fa-lg" > < /span>About Us <
            /NavLink> <
            /NavItem> <
            NavItem >
            <
            NavLink className = "nav-link"
            to = "/menu" >
            <
            span className = "fa fa-list fa-lg" > < /span>Menu <
            /NavLink> <
            /NavItem> <
            NavItem >
            <
            NavLink className = "nav-link"
            to = "/contactus" >
            <
            span className = "fa fa-address-card fa-lg" > < /span>Contact Us <
            /NavLink> <
            /NavItem> <
            /Nav> <
            Nav className = "ml-auto"
            navbar >
            <
            NavItem >
            <
            Button outline onClick = { this.toggleModal } >
            <
            span className = "fa fa-sign-in fa-lg" > < /span>Login <
            /Button> <
            /NavItem> <
            /Nav> <
            /Collapse> <
            /div> <
            /Navbar> <
            Jumbotron >
            <
            div className = "container" >
            <
            div className = "row row-header" >
            <
            div className = "col-12 col-sm-6" >
            <
            h1 > Extra Blatt Resturant!! < /h1> <
            p > We take inspiration from the World 's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p> <
            /div> <
            /div> <
            /div> <
            /Jumbotron> <
            Modal isOpen = { this.state.isModalOpen }
            toggle = { this.toggleModal } >
            <
            ModalHeader toggle = { this.toggleModal } > Login < /ModalHeader> <
            ModalBody >
            <
            Form onSubmit = { this.handleLogin } >
            <
            FormGroup >
            <
            Label htmlFor = "username"
            md = { 2 } > Username < /Label> <
            Input type = "text"
            name = "username"
            id = "username"
            // This innerref is used to retreive the value
            innerRef = {
                (Input) => this.username = Input }
            /> <
            /FormGroup> <
            FormGroup >
            <
            Label htmlFor = "password"
            md = { 2 } > Password < /Label> <
            Input type = "text"
            name = "password"
            id = "password"
            // This innerref is used to retreive the value
            innerRef = {
                (Input) => this.password = Input }
            /> <
            /FormGroup> <
            FormGroup check >
            <
            Label check >
            <
            Input type = "checkbox"
            name = "remember"
            // This innerref is used to retreive the value
            innerRef = {
                (Input) => this.remember = Input }
            />Remember Me <
            /Label> <
            /FormGroup> <
            Button type = "submit"
            value = "Submit"
            color = "primary" >
            Login <
            /Button> <
            /Form> <
            /ModalBody> <
            /Modal> <
            /React.Fragment>
        )
    }
}
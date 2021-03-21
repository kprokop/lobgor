import React from 'react';
import '../styles/ContactPage.css';
import {Prompt} from 'react-router-dom';

class ContactPage extends React.Component {

state = {
    value: ""
}

handleChange =(e)=>{
    this.setState({
        value: e.target.value
    })
}
handleSubmit =(e)=>{
    e.preventDefault();
    this.setState({
        value:""
    })
}

    render() {
        return (
            <div className="contact">
                <p>Zakład Mechaniczny Produkcyjno Usługowy Lobgór S.C.</p>
                <p>38-305 Lipinki 428</p>
                <p>tel: +48 13 447 74 98</p>
                <p>kom: +48 501 405 160</p>
                <p>email:
                <a href="mailto:lobgor@wp.pl"> lobgor@wp.pl</a>
                </p>
                

           <form action="https://formspree.io/f/mayawnzq" method="POST">
               <h3>Napisz do nas</h3>
               <textarea value={this.state.value} onChange={this.handleChange} type="text" name="message" placeholder="wpisz wiadomość"></textarea>
               <button onSubmit={this.handleSubmit}>Wyślij</button>
           </form>
           {/* prompt słuzy do zabezpieczania formularza przed opuszczeniem bez wysłania */}
           <Prompt
           when={this.state.value ? true : false}
           message='Masz niewypełniony formularz. Czy napewno chcesz opuścić tą stronę'
           />
            </div>
        );
    }
}

export default ContactPage;

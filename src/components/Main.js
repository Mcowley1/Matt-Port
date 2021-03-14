import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.jpg'
import pic05 from '../images/pic05.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            So! A little about me lol. I got into web development to reinvent myself, to bring my creativity to the web.
            My favorite tools to use is React, React Native, CSS, and Node. Also know how to use express, MongoDB,
            Graphql, and JavaScript.
            Hobbies: Fitness, Jiujitsu, and Bodybuilding
          </p>
          
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <a href="http://sneakerz-seekerz.herokuapp.com/">Sneakerz Seekerz</a>
          <p className="image main">
            <img src={pic03} alt="" />
          </p>
          <a href="https://mcowley1.github.io/Cocktail-U/">CockTail-U</a>
          <p className="image main">
            <img src={pic04} alt="" />
          </p>
          <a href="https://mcowley1.github.io/taskmaster-pro/">Taskmaster Pro</a>
          <p className="image main">
            <img src={pic05} alt="" />
          </p>
          <a href="https://mcowley1.github.io/timed-quiz/">Timed-Quiz</a>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Resume</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="https://www.linkedin.com/in/matthew-cowley-92b509142/" className="icon fa-linkedin">
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Mcowley1"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main

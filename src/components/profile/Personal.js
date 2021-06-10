import React from "react";

export default function Personal() {
  return (
    <section className="profile-content">
      <h1>About me</h1>
      <h3>Account details</h3>
      <p>Fill the information related to your user profile.</p>
      <form>
        <div className="control">
        <label for="foro">Your avatar</label>
        <input
            type="file"
            className="name"
            required
            placeholder="send a foto..."
          />
          <label for="name">How other see your name</label>
          <input
            type="text"
            className="name"
            required
            placeholder="Fill your name to show..."
            value="John Doe"
          />
        </div>
        <div className="control">
          <label for="name">Your user and contact e-mail</label>
          <input
            type="email"
            className="email"
            required
            placeholder="Fill your email me@myhost.com..."
            value="john-doe1982@gemilio.bit"
          />
        </div>
        <h3>Bio</h3>
        <p>Other people want to know your motivations, your inspirations, what you can offer to do the world a better place. Feel free to share that you want, or simply say hello. ;)</p>
        <div className="control">
        <label for="name">Tell your own story</label>
          <textarea
            className="email"
            value="To sorry world an at do spoil along. Incommode he depending do frankness remainder to. Edward day almost active him friend thirty piqued. People as period twenty my extent as. Set was better abroad ham plenty secure had horses. Admiration has sir decisively excellence say everything inhabiting acceptance. Sooner settle add put you sudden him. "
          />
          </div>
        <div className="actions">
          <button>save</button>
        </div>
      </form>
    </section>
  );
}

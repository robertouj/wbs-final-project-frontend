import React from "react";
import { useState } from "react";

export default function Register() {
  const [isReady, setIsReady] = useState(false);

  return (
    <div>
      <section className="auth">
        <h1>{isReady ? "Wellcome!" : "Join to us"}</h1>
        {isReady ? (
          <div>
            <h3>Thanks for joining to the KnowBank community.</h3>
            <br />
            <p>
              You are now prepared to <strong>be a mentor</strong> and{" "}
              <strong>share your knowledge</strong>. In our community, we think
              that all the people have the oportunity to teach to others. You{" "}
              <strong>don't need to be a master</strong>, only expend your time
              and discover that you know more that you really think.
            </p>
            <p>
              Only take 5 minutes to
              <strong> think in something that you enjoy</strong>, and maybe this
              could be shared with others. Be creative and original, you can
              also <strong>learn to know yourself</strong>.
            </p>
            <p>
              Go to the <a href="/profile/skills">profile</a>, fill your bio,{" "}
              <strong>fill some kind of skills</strong> that you know, and you
              will be ready to <strong>make happy our community</strong>.
            </p>
            <p>
              As a special gift for you, we prepared a wellkome kit. Check your
              Wallet! You have recibed <strong>5 free TimeCoins</strong> that
              you can use to get your first lessons.
            </p>
            <p>Enjoy your learning!!</p>
            <div className="actions">
              <small>Also you can search something to lear...</small>
              <a href="/">what do you need?</a>
            </div>
          </div>
        ) : (
          <form>
            <div className="control">
              <input
                type="text"
                className="name"
                required
                placeholder="Fill your name to show..."
              />
            </div>
            <div className="control">
              <input
                type="email"
                className="email"
                required
                placeholder="Fill your email me@myhost.com..."
              />
            </div>
            <div className="control">
              <input
                type="email"
                className="email"
                required
                placeholder="Repeat your email..."
              />
            </div>
            <label htmlFor="password">
              Min. 8 char and at least one special character, e.g., ! @ # ? ]
            </label>
            <div className="control">
              <input
                type="password"
                className="password"
                required
                placeholder="Fill your password..."
              />
            </div>
            <div className="control">
              <input
                type="password"
                className="password"
                required
                placeholder="Repeat your password..."
              />
            </div>
            <div className="actions">
              <button onClick={() => setIsReady(true)}>ready</button>
              <a href="/#/login">log in</a>
            </div>
          </form>
        )}
      </section>
    </div>
  );
}
/*
<form>
          <div className="control">
            <input type="text" className="name" required placeholder="Fill your name to show..." />
          </div>
          <div className="control">
            <input type="email" className="email" required placeholder="Fill your email me@myhost.com..." />
          </div>
          <div className="control">
            <input type="email" className="email" required placeholder="Repeat your email..." />
          </div>
          <label htmlFor="password">Min. 8 char and at least one special character, e.g., ! @ # ? ]</label>
          <div className="control">
            <input type="password" className="password" required placeholder="Fill your password..." />
          </div>
          <div className="control">
            <input type="password" className="password" required placeholder="Repeat your password..." />
          </div>
          <div className="actions">
            <button
              onClick={() => setIsReady(true)}
            >ready</button>
            <button
              type="button"
              className="toggle"
              onClick={""}
            >
              log in
            </button>
          </div>
        </form>

*/
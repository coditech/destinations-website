import React from "react";

export default function Header() {
  return (
    <section className="p-5 tm-container-outer tm-bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 mx-auto tm-about-text-wrap text-center">
            <h2 className="text-uppercase mb-4">
              Your <strong>Journey</strong> is our priority
            </h2>
            <p className="mb-4">
              Nullam auctor, sapien sit amet lacinia euismod, lorem magna
              lobortis massa, in tincidunt mi metus quis lectus. Duis nec
              lobortis velit. Vivamus id magna vulputate, tempor ante eget,
              tempus augue. Maecenas ultricies neque magna.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

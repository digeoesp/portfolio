import React from 'react';
import k from '../img/k.png';
import meals from '../img/meals.png';
import number from '../img/number.png';
import tail from '../img/tail.png';
import '../projects/projects.css';

const Projects = () => {
  return (
    <main className="project-container">
      <div>
        <h1>{`<Projects />`}</h1>
      </div>
      <section>
        <div>
          <h2>Kcal</h2>
        </div>
        <div>
          <p className="project-main">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eos repudiandae
            blanditiis provident tempore, facere distinctio, similique, consequatur id qui aperiam
            quae est nihil enim minus accusantium aut dicta. Cum, fugiat veritatis dolores totam
            temporibus culpa velit vitae quibusdam laboriosam aliquid nisi? Vel beatae, eaque, porro
            autem atque dicta explicabo provident aperiam doloribus ipsam deserunt ducimus adipisci
            sint debitis fugit?
          </p>
        </div>
        <div>
          <p className="project-main">Technologies: Loremquas voluptatum dolorem?</p>
        </div>
        <div>
          <ul className="source-container">
            <li>
              <a className=" source_container-a" href="">
                See Live
              </a>
            </li>
            <li>
              <a className="source_container-a" href="">
                Source Code
              </a>
            </li>
          </ul>
        </div>
        <div>
          <img src={k} alt="food" />
        </div>
      </section>
      <section>
        <div>
          <h2>Tail Wag</h2>
        </div>
        <div>
          <p className="project-main">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eos repudiandae
            blanditiis provident tempore, facere distinctio, similique, consequatur id qui aperiam
            quae est nihil enim minus accusantium aut dicta. Cum, fugiat veritatis dolores totam
            temporibus culpa velit vitae quibusdam laboriosam aliquid nisi? Vel beatae, eaque, porro
            autem atque dicta explicabo provident aperiam doloribus ipsam deserunt ducimus adipisci
            sint debitis fugit?
          </p>
        </div>
        <div>
          <p className="project-main">Technologies: Loremquas voluptatum dolorem?</p>
        </div>
        <div>
          <img src={tail} alt="food" />
        </div>
      </section>
      <section>
        <div>
          <h2>Meals On Wheels</h2>
        </div>
        <div>
          <p className="project-main">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eos repudiandae
            blanditiis provident tempore, facere distinctio, similique, consequatur id qui aperiam
            quae est nihil enim minus accusantium aut dicta. Cum, fugiat veritatis dolores totam
            temporibus culpa velit vitae quibusdam laboriosam aliquid nisi? Vel beatae, eaque, porro
            autem atque dicta explicabo provident aperiam doloribus ipsam deserunt ducimus adipisci
            sint debitis fugit?
          </p>
        </div>
        <div>
          <p className="project-main">Technologies: Loremquas voluptatum dolorem?</p>
        </div>
        <div>
          <img src={k} alt="food" />
        </div>
      </section>
      <section>
        <div>
          <h2>Number Guessing Game</h2>
        </div>
        <div>
          <p className="project-main">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eos repudiandae
            blanditiis provident tempore, facere distinctio, similique, consequatur id qui aperiam
            quae est nihil enim minus accusantium aut dicta. Cum, fugiat veritatis dolores totam
            temporibus culpa velit vitae quibusdam laboriosam aliquid nisi? Vel beatae, eaque, porro
            autem atque dicta explicabo provident aperiam doloribus ipsam deserunt ducimus adipisci
            sint debitis fugit?
          </p>
        </div>
        <div>
          <p className="project-main">Technologies: Loremquas voluptatum dolorem?</p>
        </div>
        <div>
          <nav>
            <ul>
              <li>
                <a href="">See Live</a>
                <a href="">Source Code</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <img src={number} alt="food" />
        </div>
      </section>
    </main>
  );
};

export default Projects;

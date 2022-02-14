import React from 'react';
import k from '../img/k.png';
import meals from '../img/meals.png';
import number from '../img/number.png';
import tail from '../img/tail.png';
import '../projects/projects.css';

const Projects = () => {
  return (
    <section>
      {/* //////////////////////////////////////////Kcal /////////////////////////*/}
      <div className="container">
        <div>
          <h1 className="section-header">{`<Projects />`}</h1>
          <div className="info-container">
            <h2>Kcal</h2>
            <article>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eos repudiandae
              blanditiis provident tempore, facere distinctio, similique, consequatur id qui aperiam
              quae est nihil enim minus accusantium aut dicta. Cum, fugiat veritatis dolores totam
              temporibus culpa velit vitae quibusdam laboriosam aliquid nisi? Vel beatae, eaque,
              porro autem atque dicta explicabo provident aperiam doloribus ipsam deserunt ducimus
              adipisci sint debitis fugit?
              <br />
              <br />
              <article>Technologies: Loremquas voluptatum dolorem?</article>
            </article>
            <img id="k-image" src={k} alt="food" />
          </div>
          {/* ////////////////////////////Tail Wag ///////////////////*/}
        </div>
        <div>
          <h2>Tail Wag</h2>
          <article>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eos repudiandae
            blanditiis provident tempore, facere distinctio, similique, consequatur id qui aperiam
            quae est nihil enim minus accusantium aut dicta. Cum, fugiat veritatis dolores totam
            temporibus culpa velit vitae quibusdam laboriosam aliquid nisi? Vel beatae, eaque, porro
            autem atque dicta explicabo provident aperiam doloribus ipsam deserunt ducimus adipisci
            sint debitis fugit?
            <br />
            <br />
            <article>Technologies: Loremquas voluptatum dolorem?</article>
          </article>
          <img className="image" src={tail} alt="food" />
        </div>
        {/* ////////////////////////////meals on wheels ///////////////////*/}

        <div>
          <h2>Kcal</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eos repudiandae
            blanditiis provident tempore, facere distinctio, similique, consequatur id qui aperiam
            quae est nihil enim minus accusantium aut dicta. Cum, fugiat veritatis dolores totam
            temporibus culpa velit vitae quibusdam laboriosam aliquid nisi? Vel beatae, eaque, porro
            autem atque dicta explicabo provident aperiam doloribus ipsam deserunt ducimus adipisci
            sint debitis fugit?
          </p>
          <img className="image" src={meals} alt="food" />
        </div>
        {/* number guessing game */}
        <div>
          <h2>Kcal</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eos repudiandae
            blanditiis provident tempore, facere distinctio, similique, consequatur id qui aperiam
            quae est nihil enim minus accusantium aut dicta. Cum, fugiat veritatis dolores totam
            temporibus culpa velit vitae quibusdam laboriosam aliquid nisi? Vel beatae, eaque, porro
            autem atque dicta explicabo provident aperiam doloribus ipsam deserunt ducimus adipisci
            sint debitis fugit?
          </p>
          <img className="image" src={number} alt="food" />
        </div>
      </div>
    </section>
  );
};

export default Projects;

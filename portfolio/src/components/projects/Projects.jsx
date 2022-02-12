import React from 'react';
import k from '../img/k.png';
import meals from '../img/meals.png';
import number from '../img/number.png';
import tail from '../img/tail.png';
import '../projects/projects.css';

const Projects = () => {
  return (
    <section>
      <div>
        <h1>{`<Projects />`}</h1>
        <h2>Kcal</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eos repudiandae blanditiis
          provident tempore, facere distinctio, similique, consequatur id qui aperiam quae est nihil
          enim minus accusantium aut dicta. Cum, fugiat veritatis dolores totam temporibus culpa
          velit vitae quibusdam laboriosam aliquid nisi? Vel beatae, eaque, porro autem atque dicta
          explicabo provident aperiam doloribus ipsam deserunt ducimus adipisci sint debitis fugit?
        </p>
        <img className="image" src={k} alt="food" />
      </div>
      <div>
        <h2>Kcal</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eos repudiandae blanditiis
          provident tempore, facere distinctio, similique, consequatur id qui aperiam quae est nihil
          enim minus accusantium aut dicta. Cum, fugiat veritatis dolores totam temporibus culpa
          velit vitae quibusdam laboriosam aliquid nisi? Vel beatae, eaque, porro autem atque dicta
          explicabo provident aperiam doloribus ipsam deserunt ducimus adipisci sint debitis fugit?
        </p>
        <img className="image" src={tail} alt="food" />
      </div>
      <div>
        <h2>Kcal</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eos repudiandae blanditiis
          provident tempore, facere distinctio, similique, consequatur id qui aperiam quae est nihil
          enim minus accusantium aut dicta. Cum, fugiat veritatis dolores totam temporibus culpa
          velit vitae quibusdam laboriosam aliquid nisi? Vel beatae, eaque, porro autem atque dicta
          explicabo provident aperiam doloribus ipsam deserunt ducimus adipisci sint debitis fugit?
        </p>
        <img className="image" src={meals} alt="food" />
      </div>
      <div>
        <h2>Kcal</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eos repudiandae blanditiis
          provident tempore, facere distinctio, similique, consequatur id qui aperiam quae est nihil
          enim minus accusantium aut dicta. Cum, fugiat veritatis dolores totam temporibus culpa
          velit vitae quibusdam laboriosam aliquid nisi? Vel beatae, eaque, porro autem atque dicta
          explicabo provident aperiam doloribus ipsam deserunt ducimus adipisci sint debitis fugit?
        </p>
        <img className="image" src={number} alt="food" />
      </div>
    </section>
  );
};

export default Projects;

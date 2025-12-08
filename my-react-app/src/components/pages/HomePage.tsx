import React from "react";
import taskeme from "../../assets/taskeme.png";
import BackToBtn from "../layout/BackToBtn/BackToBtn";

interface HomePage {
    closeSidebar: () => void;
}

const HomePage: React.FC<HomePage> = ({closeSidebar}) => {
    return (
        <main className="main-content" onClick={closeSidebar}>
            <section>
                <h2>Présentation de Taskme</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus error magni quae numquam necessitatibus. Corporis modi saepe molestias aliquam minus voluptas voluptate vel ut. Eos hic possimus ipsum laborum nulla?</p>
                <label>Actions possibles :</label>
                <ul>
                    <li>Accepter</li>
                    <li>Refuser</li>
                    <li>Deleguer</li>
                </ul>
            </section>
            <section>
                <label>fonctionnalites principale </label>
                <ol>
                    <li>chat interne</li>
                    <li>parc véhicules</li>
                    <li>tableau de bord </li>
                </ol>

                <figure>
                    <img src={taskeme} alt="illustration de le task" width={600}/>
                        <figcaption>TaskMe if you can</figcaption>
                        <BackToBtn/>
                </figure>
            </section>
        </main>
    );
};
export default HomePage;
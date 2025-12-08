import React from "react";
import photoProfile from "../../assets/photo_profile.jpg";

interface HomePage {
    closeSidebar: () => void;
}

const ProfilePage: React.FC<HomePage> = ({closeSidebar}) => {
    return (
        <main className="main-content" onClick={closeSidebar}>
            <section>
                <figure>
                    <img src={photoProfile} alt={"profile picture"} width={200}/>
                        <figcaption>photo_profile</figcaption>

                </figure>
            </section>

            <section>

                <div data-user-name="name">nom: User</div>
                <div data-user-role-="Admin">role: User</div>
                <div data-user-email="Gmail.com">email: user@gmail.com</div>
                <div data-user-number="+212">telephone: 012345678</div>
                <div data-user-state="default">status: Active</div>
                <details>
                    <summary>Comptences: </summary>
                    <ul>
                        <li>html</li>
                        <li>js</li>
                        <li>Css</li>
                    </ul>
                    <summary>Experiences: </summary>
                    <ul>
                        <li>bni</li>
                        <li>sima</li>
                        <li>bala</li>
                    </ul>
                    <summary>Parcours: </summary>
                    <ul>
                        <li>bac</li>
                        <li>licence</li>
                        <li>CI</li>
                    </ul>
                </details>

            </section>
        </main>
    );
};
export default ProfilePage;
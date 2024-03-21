import React from "react";
import styles from "./LinkTree.module.css";
import { Colors } from "../components/Colors";

// Interface pour définir la structure de chaque objet dans la liste
interface Link {
  httpLink: string;
  name: string;
  imageLink: string;
  description: string;
}

// Propriétés du composant
interface Props {
  LinkContainer: Link[]; // Un tableau de Personnes
}

// Composant fonctionnel qui affiche la liste de personnes
const LinkTree: React.FC<Props> = ({ LinkContainer }) => {
  return (
    <center>
      <div style={{ backgroundColor: Colors.GrisClair2 }}>
        <h2>Liste des Liens de l'arbre</h2>
        {LinkContainer.map((lc, index) => (
          <div key={index} className={styles.LinkMainDiv}>
            <img className={styles.LinkImage} src={lc.imageLink} />
            <div className={styles.LinkNameDiv}>
              <a href={lc.httpLink}>{lc.name}</a>
            </div>

            {/* Afficher le div uniquement si lc.description n'est pas null */}
            {lc.description !== null && (
              <div className={styles.LinkExternalDiv}>{lc.description}</div>
            )}
          </div>
        ))}
      </div>
    </center>
  );
};

export default LinkTree;

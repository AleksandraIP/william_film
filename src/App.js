import React from 'react';
import './App.css';
import infoFilm from "./film/info";
import Film from "./film/film";


// class William extends React.Component{
//   render() {
//     return(
//        <div>
//          <h1>{this.props.name}</h1>
//          <p>{this.props.about}</p>
//        </div>
//     )
//   }
// }
//
// class Poems extends React.Component{
//     render() {
//         return(
//             <div>
//                 <h1>Poems</h1>
//                 <p>{this.props.description}</p>
//             </div>
//         )
//     }
// }

function App() {
  return (
    <div className="App">
{/*      <William name="William Shakespeare" about="William Shakespeare (bapt. 26 April 1564 – 23 April 1616) was an English playwright, poet and actor. He is widely regarded as the greatest writer in the English language and the world's greatest dramatist. He is often called England's national poet and the 'Bard of Avon' (or simply 'the Bard'). His extant works, including collaborations, consist of some 39 plays, 154 sonnets, three long narrative poems, and a few other verses, some of uncertain authorship. His plays have been translated into every major living language and are performed more often than those of any other playwright. He remains arguably the most influential writer in the English language, and his works continue to be studied and reinterpreted.*/}
{/*Shakespeare was born and raised in Stratford-upon-Avon, Warwickshire. At the age of 18, he married Anne Hathaway, with whom he had three children: Susanna and twins Hamnet and Judith. Sometime between 1585 and 1592, he began a successful career in London as an actor, writer, and part-owner of a playing company called the Lord Chamberlain's Men, later known as the King's Men. At age 49 (around 1613), he appears to have retired to Stratford, where he died three years later. Few records of Shakespeare's private life survive; this has stimulated considerable speculation about such matters as his physical appearance, his sexuality, his religious beliefs and whether the works attributed to him were written by others.*/}
{/*Shakespeare produced most of his known works between 1589 and 1613. His early plays were primarily comedies and histories and are regarded as some of the best works produced in these genres. He then wrote mainly tragedies until 1608, among them Hamlet, Romeo and Juliet, Othello, King Lear, and Macbeth, all considered to be among the finest works in the English language. In the last phase of his life, he wrote tragicomedies (also known as romances) and collaborated with other playwrights.*/}
{/*Many of Shakespeare's plays were published in editions of varying quality and accuracy in his lifetime. However, in 1623, two fellow actors and friends of Shakespeare's, John Heminges and Henry Condell, published a more definitive text known as the First Folio, a posthumous collected edition of Shakespeare's dramatic works that included all but two of his plays. Its Preface was a prescient poem by Ben Jonson that hailed Shakespeare with the now famous epithet: ''not of an age, but for all time'."></William>*/}

{/*        <Poems description="In 1593 and 1594, when the theatres were closed because of plague, Shakespeare published two narrative poems on sexual themes, Venus and Adonis and The Rape of Lucrece. He dedicated them to Henry Wriothesley, Earl of Southampton. In Venus and Adonis, an innocent Adonis rejects the sexual advances of Venus; while in The Rape of Lucrece, the virtuous wife Lucrece is raped by the lustful Tarquin. Influenced by Ovid's Metamorphoses, the poems show the guilt and moral confusion that result from uncontrolled lust. Both proved popular and were often reprinted during Shakespeare's lifetime. A third narrative poem, A Lover's Complaint, in which a young woman laments her seduction by a persuasive suitor, was printed in the first edition of the Sonnets in 1609. Most scholars now accept that Shakespeare wrote A Lover's Complaint. Critics consider that its fine qualities are marred by leaden effects. The Phoenix and the Turtle, printed in Robert Chester's 1601 Love's Martyr, mourns the deaths of the legendary phoenix and his lover, the faithful turtle dove. In 1599, two early drafts of sonnets 138 and 144 appeared in The Passionate Pilgrim, published under Shakespeare's name but without his permission."></Poems>*/}
{/*    */}

       <Film data={infoFilm}></Film>
    </div>
  );
}

export default App;

//Fonction qui sera appelée en deuxième (la fonction de callback)
const func = () => {
  console.log("Je suis appelé par la fonction principale");
};

const fn02 = () => {
  console.log("Je suis appelé par la fonction principale mais je suis func02");
};

const fn03 = (foo) => {
  console.log(
    foo + " Je suis appelé par la fonction principale mais je suis func03"
  );
};
//fonction principale
function fn01(cc, a, callback) {
  console.log(cc + "   Je suis la fonction principale");
  callback(a);
  //func03("Youtube");
}

fn01("john", "Youtube", func03);

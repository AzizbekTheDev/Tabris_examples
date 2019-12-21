import {Page, Button, TextView, contentView, AlertDialog} from 'tabris';

export class RandomPL extends Page{
  constructor(...props){
    super();
    this.set({title: "Programming Language Generator", ...props}).append(
      <$>
      <Button centerX bottom="50" onSelect={showAlert} padding={16} background={[50, 200, 50]}>Show me the dialog</Button>
      <Button center onSelect={showText} padding={16} background={[250, 150, 150]}>Show me a programming language</Button>
      <TextView id={"gift"} centerX bottom='prev() 20' font='25px'/>
      <TextView id={"count"} centerX font="20px" top='10'>Showed languages: 0</TextView>
    </$>
    )
  }
}

async function fadeOut(widget) {
  await widget.animate(
    {opacity: 0},
    {duration: 1000, easing: 'ease-out'}
  );
}

async function fadeIn(widget) {
  await widget.animate(
    {opacity: 1000},
    {duration: 0, easing: 'ease-in'}
  );
}

let count = 0;

let languages = ["Java", "JavaScript", "Swift", "ActionScript", "C", "C++", "Perl", "Scala",
                 "Kotlin", "Python", "Ruby", "PHP", "TypeScript", "C#"]

function showText() {
  count++;
  $("#count").only().text = `Showed languages: ${count}`;
  fadeIn($("#gift").only());
  $("#gift").only().text = languages[Math.floor(Math.random()*languages.length)];
  fadeOut($("#gift").only());
}

function showAlert(){
  count++;
  $("#count").only().text = `Showed languages: ${count}`;
  AlertDialog.open(
    <AlertDialog>
      {languages[Math.floor(Math.random()*languages.length)]}
    </AlertDialog>
  );
}
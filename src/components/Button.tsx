import { ButtonHTMLAttributes } from "react";
import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps) {
  return (
    <button className="button" {...props} />
  );
}

// Criando botão que será reutilizado em toda aplicação;
// Recebe por parâmetro na função as props e repassa para o elemento HTML na linha 7,
// utilizando o ...(spred operator).
// Para definir as propriedades que serão recebidas utilizamos o HTML Attributes (linha) 1
// e setamos essa confirguração na linha 3 e passamos todos estes atributos via parâmetro da função. 

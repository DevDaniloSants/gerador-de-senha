//Components
import BtnModal from "./components/Button";
import useCopy from "./hooks/useCopy";
import useGenerator from "./hooks/useGenerator";

//CSS
import "./App.css";
import { useState } from "react";
import Input from "./components/Input";

const App = () => {
  // hooks
  const { password, generator } = useGenerator();
  const { copy, copiedText } = useCopy();

  // states
  const [passwordSize, setPasswordSize] = useState(4);
  const [showInput, setShowInput] = useState(false);

  // value password
  const customPassword = showInput ? passwordSize : 6;

  const handleGeneratorClick = () => {
    generator(customPassword);
    copiedText("Copiar");
  };

  return (
    <div className="App">
      <h1>Gerador de Senha</h1>
      <div>
        <label htmlFor="showInput">Customizar tamanho:</label>
        <input
          type="checkbox"
          id="showInput"
          onChange={() => setShowInput((currentValue) => !currentValue)}
        />
      </div>
      {showInput && (
        <div>
          <label htmlFor="passwordSize">Tamanho:</label>
          <Input
            passwordSize={customPassword}
            setPasswordSize={setPasswordSize}
          />
        </div>
      )}
      <BtnModal
        name={`Gerando senha de ${customPassword} caracteres`}
        onclick={handleGeneratorClick}
      />
      <BtnModal name={copy} onclick={() => copiedText("Copiado", password)} />
      <span>
        SENHA: <p className="password">{password}</p>
      </span>
    </div>
  );
};

export default App;

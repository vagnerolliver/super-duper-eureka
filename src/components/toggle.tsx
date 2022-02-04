import { useState } from "react";

export function ToggleButtonAccessibility (){

    const [pressed, setPressed] = useState<boolean>(false);
  
    return (
      <>
      <div className="center">
        <button 
          onClick={() => setPressed(!pressed)}
          aria-label={pressed ? 'desativar': 'ativar'} 
          aria-pressed={pressed} 
        >
          Liga
        </button>
        <div className={["slider", pressed ? 'slider-on': 'slider-off' ].join(' ')}></div>
      </div>
      <style>{`
          .center {
            width: 200px;
            margin: 50px auto;
          }
  
          button { 
            outline: 0
          }
  
          .slider {
            background: #ccc;
            height: 50px;
            padding: 1rem;
            position: relative;
            width: 200px;
          }
  
          .slider::before {
            background-color: #fff;
            content: '';
            display: block;
            height: 50px;
            width: 50px;
            position: absolute;
            transition: .4s;
          }
  
          .slider-on {
            background-color: #00ff;
          }
  
          .slider-on::before { 
            transform: translateX(150px);
          }
        `}
      </style>
      </>
    ); 
}
import React from 'react'
export default function Buttons(props) {
  return (
    <div>
        <div class="button-container">
            {props.side==="left" ? (
                <button class="button-3d">
                    <div class="button-top">
                    <span class="material-icons">❮</span>
                    </div>
                    <div class="button-bottom"></div>
                    <div class="button-base"></div>
                </button>
            ):(
                <button class="button-3d">
                    <div class="button-top">
                    <span class="material-icons">❯</span>
                    </div>
                    <div class="button-bottom"></div>
                    <div class="button-base"></div>
                </button>
            )}
        

        </div>
        <style>{`
            .button-container {
                display: flex;
                justify-content: center;
                margin: 6px;
            }
            
            .button-3d {
                -webkit-appearance: none;
                appearance: none;
                position: relative;
                border-width: 0;
                padding: 0 8px;
                min-width: 4em;
                min-height: 4em;
                box-sizing: border-box;
                background: transparent;
                font: inherit;
                cursor: pointer;
                margin: 10px;
                border-radius: 20px;
            }
            
            .button-top {
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                z-index: 2;
                padding: 8px 16px;
                transform: translateY(0);
                color: #fff;
                background-image: linear-gradient(145deg, #6a11cb, #2575fc);
                text-shadow: 0 -1px rgba(0, 0, 0, 0.25);
                border-radius: 20px;
                transition: transform 0.3s, border-radius 0.3s, background 10s;
            }
            
            .button-3d:active .button-top {
                border-radius: 10px 10px 8px 8px / 8px;
                transform: translateY(2px);
                background-image: linear-gradient(145deg, #2575fc, #6a11cb);
            }
            
            .button-bottom {
                position: absolute;
                z-index: 1;
                bottom: 4px;
                left: 4px;
                border-radius: 20px;
                padding-top: 6px;
                width: calc(100% - 8px);
                height: calc(100% - 10px);
                background-image: linear-gradient(145deg, #2575fc, #6a11cb);
                box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.5);
                transition: border-radius 0.2s, padding-top 0.2s;
            }
            
            .button-base {
                position: absolute;
                z-index: 0;
                top: 4px;
                left: 0;
                border-radius: 20px;
                width: 100%;
                height: calc(100% - 4px);
                background-color: rgba(0, 0, 0, 0.15);
                box-shadow: 0 1px 1px 0 rgba(255, 255, 255, 0.75),
                inset 0 2px 2px rgba(0, 0, 0, 0.25);
                transition: border-radius 0.2s, padding-top 0.2s;
            }
            
            .button-3d:active .button-bottom {
                border-radius: 10px 10px 8px 8px / 8px;
                padding-top: 0;
            }
            
            .button-3d:active .button-base {
                border-radius: 10px 10px 8px 8px / 8px;
            }
  
        `}</style>
    </div>
  )
}

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Crossword = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const style = document.createElement("style");
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&family=Sacramento&display=swap');
      
      .crossword-container {
        background: linear-gradient(180deg, #ffe6f2, #fff5fb);
        font-family: "Playfair Display", serif;
        display: flex;
        justify-content: center;
        padding: 40px;
        min-height: 100vh;
      }
      
      .crossword-box {
        background: #fff;
        padding: 30px;
        border-radius: 40px;
        box-shadow: 0 0 30px rgba(255, 182, 213, 0.9);
        border: 3px solid #f7c1d9;
        position: relative;
      }
      
      .crossword-box::before {
        content: "🎀";
        position: absolute;
        top: -18px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 28px;
      }
      
      .crossword-title {
        text-align: center;
        color: #d63384;
        font-family: "Sacramento", cursive;
        font-size: 42px;
        margin-bottom: 10px;
      }
      
      .crossword-table {
        border-collapse: collapse;
        margin: 20px auto;
      }
      
      .crossword-table td {
        width: 40px;
        height: 40px;
        border: 1.5px solid #e89bbf;
        border-radius: 8px;
        position: relative;
      }
      
      .crossword-table td.black {
        background: repeating-linear-gradient(
          45deg,
          #f7c1d9,
          #f7c1d9 6px,
          #ffd6e8 6px,
          #ffd6e8 12px
        );
        border: none;
      }
      
      .crossword-table td.numbered::before {
        content: attr(data-number);
        position: absolute;
        top: 2px;
        left: 2px;
        font-size: 12px;
        color: #a61e5c;
        font-weight: bold;
      }
      
      .crossword-table td input {
        width: 100%;
        height: 100%;
        border: none;
        text-align: center;
        font-size: 16px;
        text-transform: uppercase;
        background: transparent;
        font-family: "Playfair Display", serif;
        color: #a61e5c;
      }
      
      .crossword-table td input:focus {
        outline: none;
        background: #fff0f7;
      }
      
      .clues {
        font-size: 14px;
        color: #a61e5c;
        margin-top: 18px;
        background: #fff0f7;
        padding: 15px;
        border-radius: 20px;
        border: 1px dashed #f3a6c8;
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
      }
      
      .flowers {
        display: none;
        text-align: center;
        padding: 50px;
        background: linear-gradient(#ffe6f2, #fff);
        border-radius: 45px;
        box-shadow: 0 0 35px rgba(255, 182, 213, .8);
      }
      
      .bouquet {
        font-size: 80px;
        animation: float 3s ease-in-out infinite;
      }
      
      @keyframes float {
        0% { transform: translateY(0); }
        50% { transform: translateY(-12px); }
        100% { transform: translateY(0); }
      }
      
      .back-btn {
        display: block;
        margin: 20px auto 0;
        padding: 12px 24px;
        background: linear-gradient(135deg, #f7c1d9, #e89bbf);
        border: none;
        border-radius: 20px;
        color: #a61e5c;
        font-family: "Sacramento", cursive;
        font-size: 20px;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
      }
      
      .back-btn:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 15px rgba(255, 182, 213, 0.6);
      }
    `;
    containerRef.current.appendChild(style);

    const html = `
      <div class="crossword-box" id="crossword">
        <h1 class="crossword-title">Crossword About Me ♡</h1>
        <table class="crossword-table">
          <!-- Row 1 -->
          <tr>
            <td class="numbered" data-number="1"><input data-l="B"></td>
            <td><input data-l="A"></td>
            <td><input data-l="T"></td>
            <td><input data-l="M"></td>
            <td><input data-l="A"></td>
            <td><input data-l="N"></td>
            <td class="black"></td>
            <td class="numbered" data-number="8"><input data-l="T"></td>
            <td><input data-l="O"></td>
            <td><input data-l="N"></td>
            <td><input data-l="O"></td>
            <td><input data-l="W"></td>
            <td><input data-l="A"></td>
            <td><input data-l="R"></td>
            <td><input data-l="I"></td>
          </tr>
          <!-- Row 2 -->
          <tr>
            <td class="numbered" data-number="2"><input data-l="B"></td>
            <td><input data-l="A"></td>
            <td><input data-l="B"></td>
            <td><input data-l="Y"></td>
            <td><input data-l="B"></td>
            <td><input data-l="L"></td>
            <td><input data-l="U"></td>
            <td><input data-l="E"></td>
            <td class="black"></td>
            <td class="numbered" data-number="9"><input data-l="C"></td>
            <td><input data-l="A"></td>
            <td><input data-l="R"></td>
            <td><input data-l="T"></td>
            <td><input data-l="I"></td>
            <td class="black"></td>
          </tr>
          <!-- Row 3 -->
          <tr>
            <td class="black"></td>
            <td class="numbered" data-number="3"><input data-l="S"></td>
            <td><input data-l="E"></td>
            <td><input data-l="V"></td>
            <td><input data-l="E"></td>
            <td><input data-l="N"></td>
            <td class="black"></td>
            <td><input data-l="O"></td>
            <td><input data-l="R"></td>
            <td><input data-l="N"></td>
            <td><input data-l="I"></td>
            <td><input data-l="S"></td>
            <td class="black"></td>
            <td class="black"></td>
            <td class="black"></td>
          </tr>
          <!-- Row 4 -->
          <tr>
            <td class="numbered" data-number="4"><input data-l="M"></td>
            <td><input data-l="A"></td>
            <td><input data-l="X"></td>
            <td class="black"></td>
            <td class="numbered" data-number="5"><input data-l="F"></td>
            <td><input data-l="E"></td>
            <td><input data-l="R"></td>
            <td><input data-l="R"></td>
            <td><input data-l="A"></td>
            <td><input data-l="R"></td>
            <td><input data-l="I"></td>
            <td class="black"></td>
            <td class="numbered" data-number="10"><input data-l="F"></td>
            <td><input data-l="O"></td>
            <td><input data-l="R"></td>
          </tr>
          <!-- Row 5 -->
          <tr>
            <td class="black"></td>
            <td class="numbered" data-number="6"><input data-l="L"></td>
            <td><input data-l="A"></td>
            <td><input data-l="N"></td>
            <td><input data-l="D"></td>
            <td><input data-l="O"></td>
            <td><input data-l="N"></td>
            <td><input data-l="O"></td>
            <td><input data-l="R"></td>
            <td><input data-l="R"></td>
            <td><input data-l="I"></td>
            <td><input data-l="S"></td>
            <td class="black"></td>
            <td class="numbered" data-number="11"><input data-l="G"></td>
            <td><input data-l="W"></td>
          </tr>
          <!-- Row 6 -->
          <tr>
            <td class="black"></td>
            <td class="black"></td>
            <td class="numbered" data-number="7"><input data-l="B"></td>
            <td><input data-l="O"></td>
            <td><input data-l="R"></td>
            <td><input data-l="U"></td>
            <td><input data-l="T"></td>
            <td><input data-l="O"></td>
            <td class="black"></td>
            <td class="numbered" data-number="12"><input data-l="F"></td>
            <td><input data-l="O"></td>
            <td><input data-l="R"></td>
            <td><input data-l="T"></td>
            <td><input data-l="N"></td>
            <td><input data-l="I"></td>
          </tr>
          <!-- Row 7 -->
          <tr>
            <td class="black"></td>
            <td class="black"></td>
            <td class="black"></td>
            <td class="numbered" data-number="13"><input data-l="A"></td>
            <td><input data-l="S"></td>
            <td><input data-l="T"></td>
            <td><input data-l="R"></td>
            <td><input data-l="O"></td>
            <td><input data-l="L"></td>
            <td><input data-l="O"></td>
            <td><input data-l="G"></td>
            <td><input data-l="Y"></td>
            <td class="black"></td>
            <td class="numbered" data-number="14"><input data-l="K"></td>
            <td><input data-l="I"></td>
          </tr>
          <!-- Row 8 -->
          <tr>
            <td class="black"></td>
            <td class="black"></td>
            <td class="black"></td>
            <td class="black"></td>
            <td class="numbered"><input data-l="M"></td>
            <td><input data-l="U"></td>
            <td><input data-l="S"></td>
            <td><input data-l="I"></td>
            <td><input data-l="C"></td>
            <td class="black"></td>
            <td class="numbered"><input data-l="K"></td>
            <td><input data-l="I"></td>
            <td><input data-l="S"></td>
            <td><input data-l="S"></td>
            <td><input data-l="E"></td>
          </tr>
        </table>
        <div class="clues">
          <b>Across</b><br>
          1. Black · 2. Color · 3. Number · 4. I wanted to be like him · 5. Failure · 6. WE hate him · 7. "she's proer"<br>
          8. Tier one glazer bro · 9. King vamp · 10. My second addiction · 11. One of my interests · 12. My first addiction · 13. Need this in my ears · 14. OBSESSED with something you give me<br>
        </div>
        <button class="back-btn" id="back-btn">← Back to Gifts</button>
      </div>
      
      <div class="flowers" id="flowers">
        <div class="bouquet">🌸💐🌷🎀🌺</div>
      </div>
    `;

    const wrapper = document.createElement("div");
    wrapper.className = "crossword-container";
    wrapper.innerHTML = html;
    containerRef.current.appendChild(wrapper);

    // Add event listeners
    const inputs = wrapper.querySelectorAll("input");
    const crosswordBox = wrapper.querySelector("#crossword") as HTMLElement;
    const flowersBox = wrapper.querySelector("#flowers") as HTMLElement;
    const backBtn = wrapper.querySelector("#back-btn") as HTMLElement;

    const checkComplete = () => {
      for (const input of inputs) {
        const inputEl = input as HTMLInputElement;
        if (inputEl.value !== inputEl.dataset.l) return;
      }
      crosswordBox.style.display = "none";
      flowersBox.style.display = "block";
      setTimeout(() => {
        navigate("/gift/crossword-complete");
      }, 2000);
    };

    inputs.forEach((input) => {
      input.addEventListener("input", (e) => {
        const target = e.target as HTMLInputElement;
        target.value = target.value.toUpperCase().slice(0, 1);
        checkComplete();
      });
    });

    backBtn.addEventListener("click", () => {
      navigate("/gifts");
    });

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [navigate]);

  return <div ref={containerRef} className="min-h-screen" />;
};

export default Crossword;

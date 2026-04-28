(function () {
  fetch("status.json?t=" + Date.now())
    .then((r) => r.json())
    .then((data) => {
      if (!data.locked) return;

      const overlay = document.createElement("div");
      overlay.id = "__status-overlay";

      overlay.innerHTML = `
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          #__status-overlay {
            position: fixed;
            inset: 0;
            z-index: 999999;
            background: #f8f8f8;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #1a1a1a;
          }
          #__status-overlay .badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: #fff3cd;
            color: #92600a;
            border: 1px solid #f5c842;
            border-radius: 999px;
            padding: 4px 14px;
            font-size: 0.78rem;
            font-weight: 600;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            margin-bottom: 1.5rem;
          }
          #__status-overlay .badge .dot {
            width: 7px; height: 7px;
            border-radius: 50%;
            background: #f5a623;
            animation: pulse 1.4s infinite;
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
          }
          #__status-overlay .card {
            background: #fff;
            border: 1px solid #e5e5e5;
            border-radius: 12px;
            padding: 2.5rem 3rem;
            max-width: 480px;
            width: 90%;
            text-align: center;
            box-shadow: 0 4px 24px rgba(0,0,0,0.06);
          }
          #__status-overlay h1 {
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 0.75rem;
            color: #111;
          }
          #__status-overlay p {
            font-size: 0.95rem;
            color: #555;
            line-height: 1.7;
            margin-bottom: 1.5rem;
          }
          #__status-overlay .contact-btn {
            display: inline-block;
            background: #46a758;
            color: #fff;
            text-decoration: none;
            border-radius: 7px;
            padding: 10px 22px;
            font-size: 0.9rem;
            font-weight: 600;
            transition: background 0.2s;
            cursor: pointer;
            border: none;
          }
          #__status-overlay .contact-btn:hover {
            background: #3a8f49;
          }
          #__status-overlay .footer {
            margin-top: 2rem;
            font-size: 0.78rem;
            color: #aaa;
          }
          #__status-overlay .footer a {
            color: #888;
            text-decoration: none;
          }
          #__status-overlay .footer a:hover {
            text-decoration: underline;
          }
          #__status-overlay .error-code {
            display: inline-block;
            background: #f3f3f3;
            border-radius: 5px;
            padding: 2px 8px;
            font-family: monospace;
            font-size: 0.82rem;
            color: #888;
            margin-top: 0.5rem;
          }
        </style>

        <div class="badge">
          <span class="dot"></span>
          Bandwidth Limit Exceeded
        </div>

        <div class="card">
          <h1>Data Bandwidth Limit Reached</h1>
          <p>
            This service has exceeded its monthly data transfer limit
            and has been temporarily suspended.<br><br>
            Please contact the developer to restore access or upgrade the plan.
          </p>
         
          <div style="margin-top:1rem">
            <span class="error-code">ERR_BANDWIDTH_LIMIT_EXCEEDED</span>
          </div>
        </div>

        <div class="footer">
          Powered by <a href="https://render.com" target="_blank">Render</a>
          &nbsp;·&nbsp;
         
        </div>
      `;
      document.body.appendChild(overlay);
    })
    .catch(() => {});
})();

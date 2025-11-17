export default function examplePage() {
    return (
      <div className='container'>
        <title>Website</title>
        <link rel='icon' href='/favicon.ico' />

        <main>
          <div className='underline'>
            <h1 className='title'>Blair Minnard</h1>
          </div>
          <img
            className='pic'
            src='https://www.google.com/imgres?q=wallpaper%20biomedical%20engineering&imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2F9c%2F28%2F9d%2F9c289d3ad186a4ea65f27cff5a1199f0.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F829436456385217936%2F&docid=GyfPaquR8KmOdM&tbnid=wNqRDB-O8eK-uM&vet=12ahUKEwj9i6y8_veQAxUkDzQIHRXEFrkQM3oECB0QAA..i&w=736&h=1308&hcb=2&itg=1&ved=2ahUKEwj9i6y8_veQAxUkDzQIHRXEFrkQM3oECB0QAA'
            alt='biomedcal engineering'
          />

          <p className='description'>
           Hello! My name is Blair, and I’m currently a sophomore majoring in Biomedical Engineering. 
                I’m really interested in how biology and technology connect, 
                and I’ve gotten to explore that through my work in the NEU Lab. 
                Being in the lab has helped me build hands-on experience and has inspired me to keep pushing deeper into research and engineering.
          </p>

          <a className='button' href='/'>
            <p> Back to Home Page</p>
          </a>
        </main>

        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 60rem;
            margin: auto;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .underline {
            /* border-bottom: solid black; */
            margin-bottom: 1.5rem;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          .pic {
            height: 450px;
            width: 450px;
          }

          .button {
            /* margin: .5rem; */
            flex-basis: 45%;
            padding: 0.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .button:hover,
          .button:focus,
          .button:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .button p {
            font-size: 1rem;
            font-weight: 600;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
}

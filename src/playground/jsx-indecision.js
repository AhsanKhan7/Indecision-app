console.log("app.js is runing");

// JSX javascript XML
const app = {
    title:'App',
    subtitle: 'put your life on computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = ' ';
        appCounter();
    }
};

const remove = () => {
    app.options.length = 0;
    appCounter();
};

const appRoot = document.getElementById('app');

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const decision = app.options[randomNum];
    alert(decision);
};

const appCounter = () => {
    const template = (
        <div>
            <h1>{app.title}</h1> 
                {app.subtitle && <p>{app.subtitle}</p>}
                <p>{app.options.length >= 2 ? 'there are two options' : 'there is one option'}</p>
                <button disabled={app.options.length === 0} onClick={onMakeDecision}>what should i do</button>
                <button onClick={remove} >Remove all</button>
            <ol>
                {app.options.map((opt) => <li key={opt}>{opt}</li>)};
            </ol>
            <form onSubmit = {onFormSubmit}>
                <input type='text' name='option'></input>
                <button>Enter options</button>
        </form>
        </div>
    )
ReactDOM.render(template, appRoot);
};

appCounter();
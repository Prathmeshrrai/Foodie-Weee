
    const heading = React.createElement("h1", {}, "hello world");
    console.log(heading);
    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(heading);

    console.log(this);

    const a = {
        fn: function(){
            console.log(this);
        },
        fn1: () =>{
            console.log(this);
        }
    }

    a.fn();
    a.fn1();
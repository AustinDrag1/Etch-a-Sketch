// Event listener for button to prompt user for new grid size
const btn = document.querySelector("#new");
btn.addEventListener("click", () => {
    newGridRequested( false );
})

// Event listener for the draw action
const drawArea = document.querySelector("#grid-container");
drawArea.addEventListener("mousedown", (e) => {
    draw(e);
});

// Get grid size, create grid, and replace existing grid
function newGridRequested( init )
{
    const size = init ? 16 : prompt("What size grid do you want?");

    if( size > 100 || size < 1 )
    {
        alert("Please keep the range between 1 and 100");
        return;
    }

    const newGrid = createGrid( size );
    replaceGrid( newGrid );
}

// Create X^2 elements for grid
function createGrid( num )
{
    const grid = [];
    const containerWidth = 960;
    const borderConsideration = 2;
    let width = 960 / num - borderConsideration;

    for( let i = 0; i < num * num; i++ )
    {
        let sqr = document.createElement("div");
        sqr.classList.add("sqr");
        sqr.style.flexBasis = width + "px";
        sqr.style.height = width + "px";
        grid.push(sqr);
    }
    
    return grid;
}

// Reset grid - clear everything out of the primary container
function replaceGrid( newGrid )
{
    const gridContainer = document.querySelector("#grid-container");
    gridContainer.replaceChildren(...newGrid);
}

// Color clicked square
function draw(e)
{
    const hex = [..."0123456789ABCDEF"];
    let color = "";

    // Pick random color of 3 hex (prettier than using 6)
    for( let i = 0; i<3; i++ )
    {
        color += hex[Math.floor(Math.random() * 16)];
    }

    e.target.style.backgroundColor = "#" + color;
}

// Initialize 16x16 grid
newGridRequested( 16 );
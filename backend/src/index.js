const express = require( 'express' );
const habitTrackerRoutes = require( './routes/habitTrackerRoutes' );
const bodyParser = require( 'body-parser' );

const app = express();
const port = process.env.PORT || 3000;

app.use( bodyParser.json() );
app.use( '/api/habits', habitTrackerRoutes );

app.listen( port, () => {
    console.log( `API is listening on port ${ port }` );
} );

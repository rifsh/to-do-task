import app from "./app";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, '../.env') });

//port for running server
const port: string | number = process.env.PORT || 3000;

//listening to the server
app.listen(port, () => {
    console.log(`Server is ruunig on Port ${port}`); 
});

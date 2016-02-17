/*
 * #### BMI Calculator Application ####
 * #### Arthur Nicolas Marble      ####
 * This program is to calculate BMIs for many people.
 *
 * This program is licensed under the GPL V3. Please see LICENSE.txt or visit
 * http://www.gnu.org/licenses/gpl-3.0.txt for details.
 */


/*
 * This is my debugging function for the program.
 * For now it just prints hello world to the console.
 */
function debug() {
    console.log("Hello, world!");

}


/*
 * This will get the radio button values.
 */
function getRadioValues() {
    
}


/*
 * This processes my HTML form object and reads the values.
 * For now it just prints the values to the console.
 */
function processInput() {
    var age = document.getElementById("age").valueAsNumber;
    var weight = document.getElementById("weight").valueAsNumber;
    var heightMaj = document.getElementById("heightMaj").valueAsNumber;
    var heightMin = document.getElementById("heightMin").valueAsNumber;
    console.log("\n");
    console.log("Age   : " + age + "\nWeight: " + weight + '\n' +
                "Height: " + heightMaj + "'" + heightMin + '"');
}


/*
 * This is my main function for the program.
 * I will complete most of the tasks here.
 */
function main() {
    // Do something :D
    debug();
}


window.onload = main()

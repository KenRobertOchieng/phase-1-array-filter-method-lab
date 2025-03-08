function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// Example usage:
const drivers = ["Alice", "Bob", "alice", "Charlie"];
console.log(findMatching(drivers, "alice")); // Output: ["Alice", "alice"]

function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}

// Example usage:
console.log(fuzzyMatch(drivers, "Al")); // Output: ["Alice", "alice"]

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}

// Example usage:
const driverObjects = [
    { name: "Alice", hometown: "New York" },
    { name: "Bob", hometown: "Los Angeles" },
    { name: "Alice", hometown: "Chicago" }
];

console.log(matchName(driverObjects, "Alice"));
// Output: [{ name: "Alice", hometown: "New York" }, { name: "Alice", hometown: "Chicago" }]

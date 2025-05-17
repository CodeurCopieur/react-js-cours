const name = "codwerk";
let age = 30;

export default function exportDefault(params) {
    console.log('exportDefault : il y a un seul export default');
}

// export default exportDefault
export { name as ns, age }
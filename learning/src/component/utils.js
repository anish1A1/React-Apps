import './4k.jpg' 
export function getImageUrl(person, size='s'){
    return (
        '4k.jpg' +
        person.imageID +
        size + 'jpg'
    );
}
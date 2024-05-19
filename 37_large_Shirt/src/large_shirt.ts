
// Large Shirt:Modify the make_shirt() functon so that shirt are large by default 
// with a different message.

// Make a large shirt and a medium shirt with the default message, and a shirt of any size.

function make_shirt(size: string = 'large',text:string = 'I love typeScript.'){

    console.log(`creating a ${size} shirt with the message: ${text}`);
}
make_shirt();

make_shirt('Medium');

make_shirt('Small', 'I love python');
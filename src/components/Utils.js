class Utils {

    arrayContains(source, matches){

        var output = [];

        for(var i = 0; i < source.length; i++){

            for(var ii = 0; ii < matches.length; ii++){

//                console.log(source[i], matches[ii]);

                if(source[i] === matches[ii]){

                    output.push(matches[ii]);

                }

            }

        }

        return output;
    }

    arrayDoesNotContain(source, matches){

        var output = [];
        var exclude = [];

        for(var i = 0; i < source.length; i++){

            //console.log(matches.indexOf(source[i]));

           if(matches.indexOf(source[i]) < 0){

               output.push(source[i]);

           }
            else{
               exclude.push(source[i]);
           }

        }

        if(exclude.length > 0){
            output = [];
        }

        return output;
    }


}

export default Utils;
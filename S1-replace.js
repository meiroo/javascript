var Promise = require("bluebird");
Promise.promisifyAll(require("fs"));
Promise.promisifyAll(require("child_process"));
var fs = require("fs");
var path = require('path');
var cp = require('child_process');

var count = 0;





function replace1(data){
	var re = /<artifactId>ToBeReplaced<\/artifactId>/gi;
	var re2 = /<groupId>org.ToBeReplaced<\/groupId>/gi;
	var re3 = /ToBeReplaced\s*-->/gi;
	var re4 = /<url>\s*http:\/\/www.ToBeReplaced.org\/*\s*<\/url>/gi;
	var re5 = /<version>14.0.1<\/version>/gi;
	var re6 = /<modelVersion>4.0.0<\/modelVersion>/gi;
	var re7 = /<id>\s*ToBeReplaced-repo\s*<\/id>/gi;
	var re8 = /<id>\s*sameworld-repo\s*<\/id>/gi;
	var re9 = /<id>\s*ToBeReplaced-snapshots\s*<\/id>/gi;
	var re10 = /<id>\s*sameworld-snapshots\s*<\/id>/gi;
	var re11 = /<id>release<\/id>/gi;
	var re12 = /<id>\s*onejar-maven-plugin.googlecode.com\s*<\/id>/gi;
	var re13 = /org\.sameworld/gi;
	//var re4 = /org\.ToBeReplaced/gi;
	data = data.replace(re,'<artifactId>sameworld</artifactId>');
	data = data.replace(re2,'<groupId>com.sameworld</groupId>');
	data = data.replace(re3,'sameworld -->');
	data = data.replace(re4,'<url>www.sameworld.com</url>');
	data = data.replace(re5,'<version>1.0.0</version>');
	data = data.replace(re6,'<modelVersion>1.0.0</modelVersion>');
	data = data.replace(re7,'<id>releases</id>');
	data = data.replace(re8,'<id>releases</id>');
	data = data.replace(re9,'<id>snapshots</id>');
	data = data.replace(re10,'<id>snapshots</id>');
	data = data.replace(re11,'<id>releases</id>');
	data = data.replace(re12,'<id>releases</id>');
	data = data.replace(re13,'com.sameworld');
	//data = data.replace(re4,'com.sameworld');
	//console.log(data);
	return data;
}

function replace2(data){
	
	//console.log(data);
	var re = /<name>ToBeReplaced(.*?)<\/name>/i;
	

	while(data.match(re)){ 
		//console.log(data.match(re));
		data = data.replace(re, "<name>SameWorld"+data.match(re)[1]+"</name>"); 
	}

	return data;
}

function replace3(data){

	var re = /<artifactId>org.ToBeReplaced(.*?)<\/artifactId>/i;	

	while(data.match(re)){ 
		//console.log(data.match(re));
		data = data.replace(re, "<artifactId>com.sameworld"+data.match(re)[1]+"</artifactId>"); 
	}

	return data;

}

function replace31(data){

	var re = /<groupId>org.ToBeReplaced(.*?)<\/groupId>/i;	

	while(data.match(re)){ 
		//console.log(data.match(re));
		data = data.replace(re, "<groupId>com.sameworld"+data.match(re)[1]+"</groupId>"); 
	}

	return data;

}

function replace32(data){

	var re = /<artifactId>(.*?)ToBeReplaced(.*?)<\/artifactId>/i;	

	while(data.match(re)){ 
		//console.log(data.match(re));
		data = data.replace(re, "<artifactId>"+data.match(re)[1]+"sameworld"+data.match(re)[2]+"</artifactId>"); 
	}

	return data;

}

function replace33(data){
	return data;
}

function replace4(data){
	var re = /<module>ToBeReplaced-(.*?)<\/module>/i;	

	while(data.match(re)){ 
		//console.log(data.match(re));
		data = data.replace(re, "<module>sameworld-"+data.match(re)[1]+"</module>"); 
	}

	return data;

}
//<module>org.ToBeReplaced.features.topology.plugins.browsers</module>
function replace41(data){
	 //<!-- ToBeReplaced Vaadin Themes -->
	 var re = /<module>(.*?)org.ToBeReplaced(.*?)<\/module>/i;
	 while(data.match(re)){ 
		//console.log(data.match(re));
		data = data.replace(re, "<module>" +data.match(re)[1] + "com.sameworld"+data.match(re)[2]+"</module>"); 
		//console.log(data);
	}
	
	return data;

}

function replace42(data){
	 //<!-- ToBeReplaced Vaadin Themes -->
	 var re = /<destFileName>(.*?)ToBeReplaced(.*?)<\/destFileName>/i;
	 while(data.match(re)){ 
		//console.log(data.match(re));
		data = data.replace(re, "<destFileName>" +data.match(re)[1] + "sameworld"+data.match(re)[2]+"</destFileName>"); 
		//console.log(data);
	}
	
	return data;

}

function replace5(data){
	 //<!-- ToBeReplaced Vaadin Themes -->
	 var re = /<!--(.*?)ToBeReplaced(.*?)-->/i;
	 while(data.match(re)){ 
		//console.log(data.match(re));
		data = data.replace(re, "<!-- " +data.match(re)[1] + "sameworld"+data.match(re)[2]+" -->"); 
	}
	return data;

}

function replace51(data){
	 //<!-- ToBeReplaced Vaadin Themes -->
	 var re = /<version>(.*?)ToBeReplaced(.*?)<\/version>/i;
	 while(data.match(re)){ 
		//console.log(data.match(re));
		data = data.replace(re, "<version>" +data.match(re)[1] + "sameworld"+data.match(re)[2]+"</version>"); 
		//console.log(data);
	}
	
	return data;

}

function replace52(data){
	//<bundle.symbolicName>com.sameworld.features.nrtg.broker</bundle.symbolicName>
    //<bundle.namespace>com.sameworld.nrtg.nrtcollector.broker</bundle.namespace>
	 var re = /<bundle\.symbolicName>(.*?)org.ToBeReplaced(.*?)<\/bundle\.symbolicName>/i;
	 while(data.match(re)){ 
		//console.log(data.match(re));
		data = data.replace(re, "<bundle.symbolicName>" +data.match(re)[1] + "com.sameworld"+data.match(re)[2]+"</bundle.symbolicNames>"); 
		//console.log(data);
	}

	re = /<bundle\.namespace>(.*?)org.ToBeReplaced(.*?)<\/bundle\.namespace>/i;
	 while(data.match(re)){ 
		//console.log(data.match(re));
		data = data.replace(re, "<bundle.namespace>" +data.match(re)[1] + "com.sameworld"+data.match(re)[2]+"</bundle.namespace>"); 
		//console.log(data);
	}
	
	return data;

}

function replace6(data){
	//<url>http://maven.ToBeReplaced.org/content/groups/ToBeReplaced.org-release</url>
	//http://192.168.1.100:8081/nexus/content/repositories/releases
	var re = /<url>http:\/\/maven.ToBeReplaced.org.*?release[0-9]*\/*<\/url>/gi;
	data = data.replace(re,'<url>http://192.168.1.100:8081/nexus/content/repositories/releases</url>');
	return data;
}

function replace62(data){
	//<url>http://maven.ToBeReplaced.org/content/groups/ToBeReplaced.org-release</url>
	//http://192.168.1.100:8081/nexus/content/repositories/releases
	var re = /<url>http:\/\/maven.ToBeReplaced.org.*?snapshot[0-9]*\/*<\/url>/gi;
	data = data.replace(re,'<url>http://192.168.1.100:8081/nexus/content/repositories/snapshots</url>');
	return data;
}

function replace63(data){
	//<url>http://maven.ToBeReplaced.org/content/groups/ToBeReplaced.org-release</url>
	//http://192.168.1.100:8081/nexus/content/repositories/releases
	var re = /<url>http:\/\/maven.ToBeReplaced.org.*?thirdparty[0-9]*\/*<\/url>/gi;
	data = data.replace(re,'<url>http://192.168.1.100:8081/nexus/content/repositories/thirdparty</url>');
	return data;
}

function replace64(data){
	//<url>http://maven.ToBeReplaced.org/content/groups/ToBeReplaced.org-release</url>
	//http://192.168.1.100:8081/nexus/content/repositories/releases
	var re = /<url>scpexe:\/\/repo.ToBeReplaced.org.*?snapshots[0-9]*\/*<\/url>/gi;
	data = data.replace(re,'<url>http://192.168.1.100:8081/nexus/content/repositories/snapshots</url>');
	return data;
}



function replace7(data){
	 //<!-- ToBeReplaced Vaadin Themes -->
	 var re = /<description>\n(.*?)ToBeReplaced/im;
	while(data.match(re)){ 
		//console.log(data.match(re));
		data = data.replace(re, "<description>\n"+data.match(re)[1]+"sameworld"); 
	}

	return data;

}

function final(data){

	var re= /ToBeReplaced/gi;
	var ignore1 = /<mainClass>.*?<\/mainClass>/gi;
	var ignore2 = /<packageName>.*?<\/packageName>/gi;
	var ignore3 = /<Export-Package>\s*.*?\s*.*?\s*.*?\s*.*?\s*<\/Export-Package>/gmi;
	var ignore4 = /<additionalProperties>\s*.*?\s*<\/additionalProperties>/gmi;
	var ignore5 = /<Spring-Context>\s*.*?\s*.*?\s*<\/Spring-Context>/gmi;
	var ignore6 = /<ToBeReplaced\.home>\s*.*?\s*.*?\s*<\/ToBeReplaced\.home>/gmi;
	//var re4 = /org\.ToBeReplaced/gi;
	data = data.replace(ignore1,'');
	data = data.replace(ignore2,'');
	data = data.replace(ignore3,'');
	data = data.replace(ignore4,'');
	data = data.replace(ignore5,'');
	data = data.replace(ignore6,'');
	var exist = data.match(re);
	if(exist){
		//console.log("EXIST!!!!"+exist);
		//console.log(data);
		return false;
	}

	return true;
}

function processDir(dir){
	//var sign = dir.substr(2,1);
	//if(sign && sign!=="f"&& sign!=="d"&& sign!=="e"&& sign!=="i")
	//	return;

	fs.readdirAsync(dir)
	.map(function(file){
		fs.statAsync(dir+'/'+file)
		.then(function(stat){
			if(stat.isDirectory()){				
				processDir(dir+'/'+file);
			}
			else
				convertFile(dir+'/'+file);
		})

	});
}

function convertFile(filename){


	var extName = path.basename(filename);
	if(extName  === "pom.xml"){
		//count ++;
		//console.log(count + " : " +filename);
		//return;

		/*fs.readFileAsync(filename,'utf-8').then(function(data){
			var re= /ToBeReplaced/gi;
			var exist = data.match(re);
			if(exist){
				count++;
				console.log(count + " : " +filename);
				return false;
			}
		});

		return;*/

		fs.readFileAsync(filename,'utf-8')
			.then(replace1).then(replace2).then(replace3)
			.then(replace31).then(replace32).then(replace33)
			.then(replace4).then(replace41).then(replace42).then(replace5)
			.then(replace51).then(replace52)
			.then(replace6).then(replace62).then(replace63)
			.then(replace64).then(replace7)
			.then(function(data){
				fs.writeFileSync(filename,data);
				var ok = final(data);
				if(!ok){
					count++;
					console.log(count + " : " +filename);

					if(count>1 &&count < 100){
						cp.execAsync('subl '+filename).then(console.log);
					}
					
				}
			});
	}
}

processDir('.');


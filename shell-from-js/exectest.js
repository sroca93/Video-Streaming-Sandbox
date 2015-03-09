var sys = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }
exec("ping -c 3 localhost", puts);
//exec("tc qdisc add dev lo root netem delay 200ms", puts);
//exec("sleep 5", puts);
//exec("ping -c 3 localhost", puts);
//exec("tc qdisc del dev lo root", puts);
//exec("tc -s qdisc ls dev lo", puts);


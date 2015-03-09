sudo tc qdisc add dev lo root netem delay 100ms 10ms #add 100ms delay, 10ms jitter (so delay will be 100ms+-10ms)
sudo tc qdisc del dev lo root netem delay 100ms 10ms #remove last rule
sudo tc qdisc add dev lo root netem loss 1% #drop packets
sudo tc -s qdisc ls dev lo #list rules


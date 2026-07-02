import React from 'react';

function App() {
  var notifications = [
    {id: 1, type: "Placement", message: "Google Placement Drive Round 1 tomorrow 9AM", timestamp: "2026-02-15T09:30:00Z"},
    {id: 2, type: "Result", message: "Sem 4 Results Out - Check portal", timestamp: "2026-02-15T07:15:00Z"},
    {id: 3, type: "Event", message: "Tech Fest 2026 registrations open", timestamp: "2026-02-15T05:00:00Z"},
    {id: 4, type: "Academic", message: "CS201 exam postponed to 15th Oct", timestamp: "2026-02-15T08:00:00Z"},
    {id: 5, type: "Placement", message: "Microsoft intern applications open", timestamp: "2026-02-15T04:00:00Z"},
    {id: 6, type: "Result", message: "TCS NQT Results shortlist published", timestamp: "2026-02-15T09:00:00Z"},
    {id: 7, type: "Event", message: "Cultural Night Auditorium 6PM", timestamp: "2026-02-14T18:00:00Z"},
    {id: 8, type: "Finance", message: "Fee due reminder last date 30th Sep", timestamp: "2026-02-15T02:00:00Z"},
    {id: 9, type: "Placement", message: "Amazon interview slot booking started", timestamp: "2026-02-15T08:30:00Z"},
    {id: 10, type: "Result", message: "Hackathon Winners Results declared", timestamp: "2026-02-15T06:00:00Z"},
    {id: 11, type: "General", message: "Hostel water cut 10AM-2PM", timestamp: "2026-02-15T00:00:00Z"},
    {id: 12, type: "Event", message: "Sports Day registrations close today", timestamp: "2026-02-14T22:00:00Z"},
  ];

  notifications.sort(function(a,b){return a.id - b.id});
  var top10 = [];
  for(var i=0; i<10; i++){
    if(notifications[i]){
      top10.push(notifications[i]);
    }
  }

  return (
    <div>
      <h1>CAMPUS NOTIFICATIONS</h1>
      <p>top 10 notifications</p>
      <table border="1" cellPadding="10" cellSpacing="0">
        <tr>
          <td>id</td>
          <td>type</td>
          <td>message</td>
          <td>timestamp</td>
        </tr>
        {top10.map(function(n){
          return (
            <tr>
              <td>{n.id}</td>
              <td>{n.type}</td>
              <td>{n.message}</td>
              <td>{n.timestamp}</td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}

export default App;
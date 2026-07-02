import React from 'react';

function App() {
  var notifications = [
    {id: 1, type: "Placement", message: "CSX corporation hiring", timestamp: "2026-02-15T09:30:00Z"},
    {id: 2, type: "Result", message: "mid sem", timestamp: "2026-02-15T07:15:00Z"},
    {id: 3, type: "Event", message: "project review", timestamp: "2026-02-15T05:00:00Z"},
    {id: 4, type: "Event", message: "interview postponed", timestamp: "2026-02-15T08:00:00Z"},
    {id: 5, type: "Placement", message: "intern applications open", timestamp: "2026-02-15T04:00:00Z"},
    {id: 6, type: "Result", message: "mid-sem", timestamp: "2026-02-15T09:00:00Z"},
    {id: 7, type: "Event", message: "farewell", timestamp: "2026-02-14T18:00:00Z"},
    {id: 8, type: "Event", message: "Hackathon starts within 5 hours", timestamp: "2026-02-15T02:00:00Z"},
    {id: 9, type: "Placement", message: "Advanced micro devices Inc hiring", timestamp: "2026-02-15T08:30:00Z"},
    {id: 10, type: "Result", message: "project-review", timestamp: "2026-02-15T06:00:00Z"},
    {id: 11, type: "Result", message: "sem result", timestamp: "2026-02-15T00:00:00Z"},
    {id: 12, type: "Event", message: "tech fest", timestamp: "2026-02-14T22:00:00Z"},
  ];

  notifications.sort(function(a,b){return a.id - b.id});
  var top10 = [];
  for(var i=0; i<10; i++){
    if(notifications[i]){
      top10.push(notifications[i]);
    }
  }
  const addNotification=()=>{
    if(!id||!type||!message||!timestamp) return
  }
  return (
    <div>
      <h3>CAMPUS NOTIFICATIONS</h3>
      <p>10 notifications</p>
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
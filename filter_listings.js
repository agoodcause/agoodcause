async function updateListings(filter) {
  console.log(filter);
  var view = document.getElementById("gear");
  view.innerHTML =
    "<tr><th>Item ID</th><th>Gear</th><th>Day Rate</th><th></th></tr>";
  var q = query(collection(db, "rentable"));
  if (filter != null) {
    var q = query(collection(db, "rentable"), where("category", "==", filter));
  }

  var querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    var gear_name = doc.data().gear_name;
    var rate = doc.data().daily_rate;
    view.innerHTML += `<tr><td>${doc.id}</td>
        <td>${gear_name}</td>
        <td style="text-align: right">$${rate}</td>
        <td style="background-color: #76ccf5; padding: 5px; border-radius: 20px">Add to Quote</td></tr>`;
  });
  location.href = "#gear";
}

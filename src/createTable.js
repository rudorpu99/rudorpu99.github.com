function createTable(data){
    console.log(data);
    var trMap = data.map(function(data){
        var result = '';
        for (var key in data) {
            result += "<td>"+data[key]+"</td>";
        }
        return "<tr>"+result+"</tr>";
    }).join('');
    return '<table>'+trMap+'</table>';
}

module.exports = createTable;
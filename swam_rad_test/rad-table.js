var dataSet = [
    ["sample4@172.16.0.1", 1, 4, false],
    ["sample3@172.16.0.1", 1, 1, false],
    ["cic@172.16.0.1", 0, 0, false],
    ["sample1@10.77.20.10", 1, 5, false],
    ["sample2@192.168.20.102", 1, 5, false,],
    ["Manager@192.168.20.3", 0, 0, false,],
    ["Message@192.168.20.3", 0, 0, false],
    ["Slice@192.168.20.3", 0, 0, false],
    ["ssssss@172.16.0.1", 1, 1, false],
    ["unknown@192.168.20.3", 1, 5, false],
    ["shaila@192.168.20.3", 0, 2, false],
    ["sharmin@192.168.20.3", 1, 3, false]
];
 
$(document).ready(function() {
    $('#rad-table').DataTable( {
        data: dataSet,
        columns: [
            { title: "Username" },
            { title: "Risk Trend" },
            { title: "Risk Score" },
            { title: "Watch List",
                render: function (data, type) {

                    if (type == "display") {
                        if (data == false) {
                            icon = '<i class="fa fa-eye-slash"></i>';
                        }
                        else {
                            icon = '<i class="fa fa-eye"></i>';
                        }
                        return icon;
                    }
                    else {
                        return data;
                    }
                    
                }   
            },
        ],
        order: [[ 2, "desc" ]],
    } );

    

    $('#rad-table tbody').on( 'click', 'tr', function () {
        // console.log( table.row( this ).data()[3] );
        var table = $('#rad-table').DataTable();
        var row = table.row(this);
        var data = row.data();
        data[3] = !data[3];
        row.data( data ).draw();
        console.log(data[3]);

    } );
} );
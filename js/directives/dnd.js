
function DNDDirective($document) {
    return {
        restrict: 'A',
        scope: {
            callback: "&fileDropAction"
        },
        link: function(scope, element, attr) {

            var allowed = attr.allowedTypes.split(",");
            var allowedTypes = [];
            for (var i = 0; i < allowed.length; i++) {
                allowedTypes.push(allowed[i].trim())
            }

            var dragOverOrEnter = function(e) {
                e.preventDefault();
                element.addClass("alert-success");
                e.dataTransfer.effectAllowed = 'copy';
                return false;
            };

            element.bind("dragover", dragOverOrEnter);
            element.bind("dragenter", dragOverOrEnter);

            element.bind('dragleave', function() {
                element.removeClass("alert-success");
                return false;
            });

            return element.bind("drop", function(e) {
                e.preventDefault();
                element.removeClass("alert-success");

                var files = e.dataTransfer.files;
                for (var i = 0; i < files.length; i++) {
                    var file = files[i];
                    if (allowedTypes.indexOf(file.type) < 0) {
                        continue;
                    }

                    scope.callback({file: file});
                }
                return false;
            });
        }
    }
}
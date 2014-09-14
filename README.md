# maki-forms
Expose HTML forms for [maki](https://github.com/martindale/maki) resources.

- Auto-generate the appropriate form for various actions; get a POST form for document creations, a PATCH form for document edits.


### Mixin
maki-forms exposes a new mixin to maki, `+form`, which accepts two parameters: `resource` and `type`.

`resource` accepts a resource object (see maki documentation), but specifically expects information about the routes for each type of document modification.

`type` can be one of `create`, `edit`, or `delete`.  A form will be auto-generated with the correct verb (or a verb-hack, see "middleware") and all associated validators.

### Middleware
The majority of browsers only support GET and POST forms.  To solve this problem, maki-forms injects non-supported verbs in a hidden input, named `method`.  A server-side middleware looks for this field in POST requests and subsequently interprets the request as the correct verb.

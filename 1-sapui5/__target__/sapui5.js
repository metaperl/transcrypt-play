// Transcrypt'ed from Python, 2018-12-04 13:59:40
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
var __name__ = '__main__';
export var UI =  __class__ ('UI', [object], {
	__module__: __name__,
	get _get_my_button () {return __get__ (this, function (self) {
		return sap.m.Button (dict ({'text': 'Say Hello', 'press': (function __lambda__ () {
			return sap.m.MessageToast.show ('Hello World');
		})}));
	});},
	get _get_my_text () {return __get__ (this, function (self) {
		return sap.m.Text (dict ({'text': 'salt, pepper and oregano'}));
	});},
	get _get_my_input () {return __get__ (this, function (self) {
		return sap.m.Input (dict ({'sid': 'input0'}));
	});},
	get _get_openui5 () {return __get__ (this, function (self) {
		var core = sap.ui.getCore ();
		return core;
	});},
	get go () {return __get__ (this, function (self) {
		self.my_button.placeAt ('content');
		self.my_input.placeAt ('greeting');
	});},
	get build () {return __get__ (this, function (self) {
		self.openui5.attachInit (self.go);
	});}
});
Object.defineProperty (UI, 'openui5', property.call (UI, UI._get_openui5));
Object.defineProperty (UI, 'my_input', property.call (UI, UI._get_my_input));
Object.defineProperty (UI, 'my_text', property.call (UI, UI._get_my_text));
Object.defineProperty (UI, 'my_button', property.call (UI, UI._get_my_button));;
export var ui = UI ();

//# sourceMappingURL=sapui5.map
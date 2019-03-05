import Inflector from 'ember-inflector'

const inflector = Inflector.inflector;

inflector.irregular('lieu', 'lieux');
inflector.uncountable('advice');

export default {};
